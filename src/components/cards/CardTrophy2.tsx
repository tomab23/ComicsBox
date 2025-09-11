import React from 'react';
import { TrophyIcon, Book, Star, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import { Progress } from '@/components/ui/progress';
import type Trophy from '@/mocks/Trophy';

type Props = {
  trophy: Trophy
}

const CardTrophy2 = ({ trophy } : Props) => {

      const getRarityVariant = (rarity) => {
    switch (rarity) {
      case 'bronze': return 'default';
      case 'silver': return 'secondary';
      case 'gold': return 'outline';
      case 'platinum': return 'destructive';
      default: return 'default';
    }
  };

  return (
     <div className="max-w-sm mx-auto">
      <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg`}>
        <CardHeader className="text-center pb-2">
          {/* Badge de rareté */}
          <div className="absolute top-4 right-4">
            <Badge 
              variant={getRarityVariant("bronze")}
              className={`uppercase text-xs font-bold 'opacity-50'}`}
            >
              Bronze
            </Badge>
          </div>
          
          {/* Icône principale */}
         <div className="flex justify-center mb-4">
            <div className="relative p-4 rounded-full bg-primary text-primary-foreground shadow-lg"
         
            >
                <TrophyIcon className="w-8 h-8" />
     
             
        
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Titre */}
          <div className="text-center">
            <h3 className={`text-xl font-bold
               'text-foreground' 
            `}>
              {trophy.name}
            </h3>
          </div>

          {/* Description */}
          <p className={`text-sm text-center leading-relaxed ${
            'text-muted-foreground'
          }`}>
            {trophy.need} {trophy.page ? "Pages" : "Comics"}
          </p>

          {/* Progression */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <TrophyIcon className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">Progression</span>
              </div>
              <span className={`font-semibold ${
                'text-primary'
              }`}>
                0/{trophy.need}
              </span>
            </div>
            
            {/* <Progress 
              value={progress} 
              className={`h-2 opacity-50`}
            /> */}
          </div>

          {/* Status */}
          {/* <div className="pt-4 border-t border-border/50">
     
              <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                <Star className="w-4 h-4 fill-current" />
                <span>Trophée débloqué !</span>
              </div>
        
          </div> */}
        </CardContent>

        {/* Effet de brillance pour les trophées débloqués */}
  
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent opacity-30 -skew-x-12 animate-pulse pointer-events-none"></div>
   
      </Card>
    </div>
  )
}

export default CardTrophy2