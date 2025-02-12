import { motion } from 'framer-motion';

const BubbleBackground = ({children}) => {
    // Configuration des bulles
    const bubbles = Array.from({ length: 20 }).map((_, index) => ({
        id: index,
        size: 5, // Taille aléatoire entre 10px et 50px
        x: Math.random() * 100, // Position horizontale aléatoire
        y: Math.random() * 100, // Position verticale aléatoire
        duration: Math.random() * 5 + 3, // Durée d'animation aléatoire
    }));

    return (
        <div className="relative  overflow-hidden">
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    className="absolute rounded-full bg-white/20 "
                    style={{
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        left: `${bubble.x}%`,
                        top: `${bubble.y}%`,
                    }}
                    animate={{
                        y: [0, -100, 0], // Mouvement vertical
                        x: [0, Math.random() * 50 - 25, 0], // Mouvement horizontal aléatoire
                        scale: [1, 1.2, 1], // Changement de taille
                        rotate: [0, Math.random() * 360], // Rotation aléatoire
                    }}
                    transition={{
                        duration: bubble.duration,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut',
                    }}
                />
            ))}
            <div className="">

                    {children}

            </div>
        </div>
    );
};

export default BubbleBackground;