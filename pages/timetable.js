import Image from "next/image";
import TimeTableImage from "@/public/images/timetable.png";
import { useMediaQuery } from "@mui/material";
import { CldImage } from "next-cloudinary";

function TimeTable({ setPage, ...props }) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 900px)");
  setPage("timetable");
  return (
    <div>
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
