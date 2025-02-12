import { motion } from 'framer-motion';

const RevealText = ({children}) => {
    return (
        <motion.div
            whileHover={{ y: 2 }} // Déplace le texte vers le haut de 10px au survol
            transition={{ type: 'spring', stiffness: 300, damping: 10 }} // Animation fluide
            style={{ cursor: 'pointer' }}
        >
            <motion.span
                initial={{ y: 0 }} // Position initiale
                whileHover={{ y: 1 }} // Déplace le texte vers le bas de 10px au survol
                transition={{ type: 'spring', stiffness: 300, damping: 10 }} // Animation fluide
            >
                {children}
            </motion.span>
        </motion.div>
    );
};

export default RevealText;