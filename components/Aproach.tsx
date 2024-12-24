"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import '../app/style.css';

const Aproach=():React.JSX.Element=> {
  return (
    <section className="full-width-section">
        <h1 className="heading">
            My <span className="text-purple">approach</span>
        </h1>
        <div className="flex-container">
        <Card 
        title="Planning & Strategy" 
        icon={<AceternityIcon order="Phase 1" />}
        description="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements.">
        <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card 
        title="Development & Progress Update" 
        icon={<AceternityIcon order="Phase 2"/>}
        description="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
        </Card>
        <Card 
        title="Development & Launch" 
        icon={<AceternityIcon order="Phase 3"/>}
        description="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up.">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  description
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description:string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className={`canvas-card ${hovered ? 'hovered' : ''}`}
  >
     <Icon className="icon top-left" />
<Icon className="icon bottom-left" />
<Icon className="icon top-right" />
<Icon className="icon bottom-right" />

      <AnimatePresence>
        {hovered && (
             <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="motion-div"
    >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative-container">
  <div className="centered-icon">
    {icon} 
  </div>
  
  <h2 className="title">
    {title} 
  </h2>
  
  <h2 className="description">
    {description} 
  </h2>
</div>
    </div>
  );
};

const AceternityIcon = ({order}:{order:string}) => {
  return (
    <div>
        <button className="button-container">
  <span className="spinner-background" />
  <span className="button-content">
   {order}
  </span>
</button>
    </div>
 
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default Aproach;
