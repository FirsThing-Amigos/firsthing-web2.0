import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image className="relative" src={'/images/icons/png/1.webp'} alt={'Comprehensive monitoring'} fill />
    ),
    title: "Energy Audit and insights",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image className="relative"  src={'/images/icons/png/2.webp'} alt={'Comprehensive monitoring'} fill />
    ),
    title: "Forecast of Electricity Bills",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image className="relative" src={'/images/icons/png/3.webp'} alt={'Real-time monitoring'} fill />
    ),
    title: "Appliances health Notification",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image className="relative" src={'/images/icons/png/4.webp'} alt={'Real-time monitoring'} fill />
    ),
    title: "Itemisation of electricity Bills a.k.a device wise Monitoring",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image className="relative" src={'/images/icons/png/5.webp'} alt={'Real-time monitoring'} fill />
    ),
    title: "Real Time Feedback on Device Performance and Anomaly Detection",
    paragraph:
      "",
  },
];
export default featuresData;
