"use client";

import dynamic from "next/dynamic";

const DeviceStlViewer = dynamic(
  () => import("@/components/DeviceStlViewer").then((mod) => mod.default),
  { ssr: false }
);

export default function DeviceStlViewerDynamic() {
  return <DeviceStlViewer />;
}
