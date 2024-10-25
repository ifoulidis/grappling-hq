import Head from "next/head";
import TimeTableImage from "@/public/images/timetable.png";
import { useMediaQuery } from "@mui/material";
import { CldImage } from "next-cloudinary";

function TimeTable({ setPage, ...props }) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 900px)");
  setPage("timetable");
  return (
    <div>
      <Head>
        <title>Grappling HQ</title>
        <meta property="og:title" content="Grappling HQ" />
        <meta
          property="og:image"
          content={`https://grapplinghq.com/chris-one-arm-choke.jpg`}
        />
        <meta
          property="og:description"
          content="Classes 7 days a week! Open mats on Saturday..."
        />
        <meta
          name="twitter:image"
          content={`https://grapplinghq.com/chris-one-arm-choke.jpg`}
        />
        <meta
          name="description"
          content="Classes 7 days a week! Open mats on Saturday..."
        />
        <meta name="twitter:title" content="Grappling HQ" />
        <meta
          name="twitter:description"
          content="Classes 7 days a week! Open mats on Saturday..."
        />
        <meta
          name="twitter:image"
          content={`https://grapplinghq.com/chris-one-arm-choke.jpg`}
        />
      </Head>
      <main className="main">
        {isSmallDevice && <h2>Click for full screen</h2>}
        <div className="ttimage">
          <a
            href={TimeTableImage.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CldImage
              src="https://res.cloudinary.com/dvwneza55/image/upload/v1729839674/timetable.png"
              alt="timetable"
              width={1080}
              height={1080}
              className="timetable"
            />
          </a>
        </div>
      </main>
    </div>
  );
}
export default TimeTable;
