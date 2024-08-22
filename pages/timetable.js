import Image from "next/image";
import TimeTableImage from "@/public/images/timetable.png";
import { useMediaQuery } from "@mui/material";

function TimeTable({ setPage, ...props }) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 900px)");
  setPage("timetable");
  return (
    <div>
      <main className="main">
        {isSmallDevice && <h2>Click for full screen</h2>}
        <div class="ttimage">
          <a
            href={TimeTableImage.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="timetable"
              src={TimeTableImage}
              alt="timetable"
              width={1080}
              height={1080}
            />
          </a>
        </div>
      </main>
    </div>
  );
}
export default TimeTable;
