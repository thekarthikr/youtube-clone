import { Box, CardContent, Typography, CardMedia, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

function ChannelCard({ channelDetail, marginTop }) {
  return (
    <Stack
      direction='column'
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        width: { xs: "100%", md: "80%", lg: "70%" },
        margin: "auto",
        marginTop,
      }}
    >
      <Link
        to={`${
          channelDetail?.id.channelId
            ? `/channel/${channelDetail?.id?.channelId}`
            : ``
        }`}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            gap: "5px",
          }}
        >
          <CardMedia
            image={
              channelDetail?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: "50%", height: "180px", width: "180px" }}
          />

          <Typography variant='h6'>
            {channelDetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems='center'
            textAlign='center'
            sx={{
              color: "gray",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <Typography>{channelDetail?.snippet?.customUrl}</Typography>
            {channelDetail?.statistics?.subscriberCount && (
              <Typography>
                {parseInt(
                  channelDetail?.statistics?.subscriberCount
                ).toLocaleString("en-US")}{" "}
                Subscribers
              </Typography>
            )}
            {channelDetail?.statistics?.videoCount && (
              <Typography>
                {parseInt(channelDetail?.statistics?.videoCount).toLocaleString(
                  "en-US"
                )}{" "}
                {""}
                Vidoes
              </Typography>
            )}
          </Stack>

          {channelDetail?.snippet?.description && (
            <Typography
              sx={{
                color: "gray",
                fontSize: "14px",
                textAlign: "center",
                width: "fit-content",
              }}
            >
              {channelDetail?.snippet?.description}
            </Typography>
          )}
        </CardContent>
      </Link>
    </Stack>
  );
}

export default ChannelCard;
