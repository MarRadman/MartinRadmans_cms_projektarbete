"use client";

import { getPageContent } from "../components/getPageContent";
import { PageData } from "@/app/types";
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
} from "@mui/material";
import { useState, useEffect } from "react";
import styles from "./style.module.css";

const Projects = () => {
  const [category, setCategory] = useState<string | undefined>(undefined);
  const [pageData, setPageData] = useState<PageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPageContent("projects", undefined, category);
      setPageData(data);
    };
    fetchData();
  }, [category]);

  const handleCategoryChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setCategory(event.target.value as string);
  };

  if (!pageData) {
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
      <Select
        value={category || ""}
        onChange={handleCategoryChange}
        displayEmpty
        sx={{ mb: 3 }}>
        <MenuItem value="">All Categories</MenuItem>
        {pageData.categories?.map((cat, index) => (
          <MenuItem key={index} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
      {pageData.projects && (
        <div className={styles.imageList}>
          {pageData.projects.map((project, index) => (
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
                    component={Link}
                    href={`/projects/${project.slug}`}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </ImageListItem>
          ))}
        </div>
      )}
    </Box>
  );
};

export default Projects;
