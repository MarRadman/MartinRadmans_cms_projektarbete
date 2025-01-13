"use client";

import LoadingData from "@/app/components/getLoading";
import { getPageContent } from "../components/getPageContent";
import { ProjectsPageData, ProjectData } from "@/app/types";
import Link from "next/link";
import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  ImageListItem,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useState, useEffect } from "react";
import styles from "./style.module.css";

const Projects = () => {
  const [category, setCategory] = useState<string>("");
  const [allProjects, setAllProjects] = useState<ProjectData[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = (await getPageContent("projects")) as ProjectsPageData;
      if (data) {
        setAllProjects(data.projects || []);
        setFilteredProjects(data.projects || []);
        setCategories(data.categories || []);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (category) {
      setFilteredProjects(
        allProjects.filter((project) => project.category === category)
      );
    } else {
      setFilteredProjects(allProjects);
    }
  }, [category, allProjects]);

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value as string);
  };

  if (loading) {
    return <LoadingData />;
  }

  if (!allProjects.length) {
    return <Typography variant="h1">Projects content not found</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 5,
      }}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          textAlign: "center",
          mb: 3,
        }}>
        Projects
      </Typography>
      <Select
        value={category}
        onChange={handleCategoryChange}
        displayEmpty
        sx={{ mb: 3 }}>
        <MenuItem value="">All Categories</MenuItem>
        {categories.map((cat, index) => (
          <MenuItem key={index} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
      <div className={styles.imageList}>
        {filteredProjects.map((project, index) => (
          <ImageListItem key={index} className={styles.imageItem}>
            <Card className="ImageListCard" sx={{ maxWidth: 400 }}>
              <CardMedia
                component="img"
                alt={project.title}
                height="200"
                image={project.images[0]}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  component={Link}
                  href={`/projects/${project.slug}`}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </ImageListItem>
        ))}
      </div>
    </Box>
  );
};

export default Projects;
