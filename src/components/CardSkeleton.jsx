import { Stack, Skeleton, Card, CardMedia, CardContent } from "@mui/material";

const CardSkeleton = ({ direction }) => {
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <Stack
      direction={direction || "row"}
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
      gap={2}
    >
      {skeleton.map((index) => (
        <Card
          key={index}
          sx={{
            width: { xs: "100%", sm: "358px", md: "320px" },
            boxShadow: "none",
            borderRadius: 0,
            backgroundColor: "transparent",
          }}
        >
          <CardMedia>
            <Skeleton
              sx={{ bgcolor: "#282828" }}
              variant='rectancular'
              width='100%'
              height='150px'
            />
          </CardMedia>

          <CardContent>
            <Skeleton sx={{ bgcolor: "#282828" }} variant='text' />
            <Skeleton sx={{ bgcolor: "#282828" }} variant='text' />
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};

export default CardSkeleton;
