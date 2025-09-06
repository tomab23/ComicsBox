import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <div className="bg-gradient-to-b dark:from-gray-900 from-stone-50 dark:to-gray-950 to-white min-h-screen flex items-center justify-center text-white p-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="max-w-md w-full"
      >
        <Card className="dark:bg-gray-800 bg-stone-100 border-2 dark:border-yellow-400 border-gray-800 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="flex flex-col items-center justify-center space-y-6 py-10">
            <AlertTriangle className="h-16 w-16 dark:text-yellow-400 text-gray-800" />
            <h1 className="text-5xl font-extrabold tracking-widest dark:text-yellow-400 text-gray-800 dark:drop-shadow-lg">
              404
            </h1>
            <p className="text-lg text-center dark:text-gray-300 text-gray-800">
              Oups ! Cette page s’est volatilisée comme un super-vilain en
              fuite...
            </p>
            <Button
              asChild
              className="dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500 font-bold bg-gray-800 hover:bg-gray-900"
            >
              <Link to="/home">🏠 Retour à l’accueil</Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
