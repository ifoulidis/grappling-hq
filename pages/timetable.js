import Image from "next/image";
import TimeTableImage from "@/public/images/timetable.jpg";

function TimeTable({ setPage, ...props }) {
  setPage("timetable");
  return (
    <div>
      <main className="main">
        <Image
          src={TimeTableImage}
          alt="timetable"
          width="100%"
          height="100%"
        />
      </main>
    </div>
  );
}
export default TimeTable;
