import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image className="relative" src={'/images/icons/webP/Energy_Audit .webp'} alt={'Comprehensive monitoring'} fill />
    ),
    title: "Energy Audit and insights ",
    paragraph: "",
  },
  {
    id: 1,
    icon: (
      <Image className="relative"  src={'/images/icons/webP/Forecast_Electricity.webp'} alt={'Comprehensive monitoring'} fill />
    ),
    title: "Forecast of Electricity Bills",
    paragraph:  "",
  },
  {
    id: 1,
    icon: (
      <Image className="relative" src={'/images/icons/webP/Appliances_health.webp'} alt={'Real-time monitoring'} fill />
    ),
    title: "Appliances health Notification",
    paragraph: "",
  },
  {
    id: 1,
    icon: (
      <Image className="relative" src={'/images/icons/webP/Itemisation_electricity.webp'} alt={'Next.js 13 (Latest)'} fill />
    ),
    title: "Itemisation of electricity Bills",
    paragraph: "",
  },
  {
    id: 1,
    icon: (
      <Image className="relative" src={'/images/icons/webP/Real_Time_Feedback.webp'} alt={'Next.js 13 (Latest)'} fill />
    ),
    title: "Real Time Feedback on Device",
    paragraph: "",
  },
  
];
export default featuresData;
