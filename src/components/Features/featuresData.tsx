import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image className="relative" src={'/images/icons/png/smart-switch1.png'} alt={'Comprehensive monitoring'} fill />
    ),
    title: "Comprehensive monitoring",
    paragraph:
      "RetroFit Smart Switch Modules for comprehensive monitoring",
  },
  {
    id: 1,
    icon: (
      <Image className="relative"  src={'/images/icons/png/sensors.png'} alt={'Comprehensive monitoring'} fill />
    ),
    title: "Motion sensors",
    paragraph:
      "Motion sensors for automated energy savings.",
  },
  {
    id: 1,
    icon: (
      <Image className="relative" src={'/images/icons/png/monitoring.png'} alt={'Real-time monitoring'} fill />
    ),
    title: "Real-time monitoring",
    paragraph:
      "Real-time monitoring dashboards for detailed consumption insights.",
  },
  {
    id: 1,
    icon: (
      <Image className="relative" src={'/images/icons/png/monitoring.png'} alt={'Next.js 13 (Latest)'} fill />
    ),
    title: "Next.js 13 (Latest)",
    paragraph:
      "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam ",
  },
  
];
export default featuresData;
