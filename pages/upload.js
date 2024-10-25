// /pages/upload.js
import { useState } from "react";
import { CldUploadButton, CldImage } from "next-cloudinary";
import styles from "@/styles/Upload.module.css";
import { parse } from "cookie";

export async function getServerSideProps({ req }) {
  const cookies = req.headers.cookie ? parse(req.headers.cookie) : {};
  if (cookies.auth !== "authenticated") {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {}, // User is authenticated
  };
}

export default function UploadPage() {
  return (
    <div className={styles.container}>
      <h1>Upload New Images</h1>
      <section>
        <h2>Timetable</h2>

        <CldUploadButton
          uploadPreset="ml_default"
          signatureEndpoint="/api/sign-cloudinary-params"
          options={{
            public_id: "timetable",
          }}
        />

        <div>
          <h3>Uploaded Image:</h3>
          <CldImage src="timetable" alt="Uploaded" width="300" height="300" />
        </div>
      </section>
      <hr />
      <section>
        <h2>Home Page Image</h2>

        <CldUploadButton
          uploadPreset="ml_default"
          signatureEndpoint="/api/sign-cloudinary-params"
          options={{
            public_id: "home-image",
          }}
        />

        <div>
          <h3>Uploaded Image:</h3>
          <CldImage src="home-image" alt="Uploaded" width="480" height="270" />
        </div>
      </section>
    </div>
  );
}
