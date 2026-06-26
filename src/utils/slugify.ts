const slugify = (value: string): string => {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")                  // Separate accented characters
    .replace(/[\u0300-\u036f]/g, "")   // Remove accents
    .replace(/&/g, " and ")            // Replace &
    .replace(/[^a-z0-9\s-]/g, "")      // Remove special characters
    .replace(/\s+/g, "-")              // Spaces -> hyphens
    .replace(/-+/g, "-")               // Collapse multiple hyphens
    .replace(/^-|-$/g, "");            // Trim hyphens
};

export default slugify;