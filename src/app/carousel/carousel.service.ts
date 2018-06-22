import {Injectable} from '@angular/core'; 
import { TCarousel } from './carousel.model';

import {Subject } from 'rxjs/Subject'; 

@Injectable()

export class CarouselService {
    thumbsChanged = new Subject<TCarousel[]>();
    whatifsChanged = new Subject<TCarousel[]>(); 
    signsChanged = new Subject<TCarousel[]>(); 
    
	private thumbs: TCarousel[] = [

    new TCarousel('../assets/images/Broken/2017/Whatif/WhatifElephant.png',
    ),
    new TCarousel('../assets/images/Broken/2017/Whatif/WhatifHippo.jpg'),
    
    new TCarousel('../assets/images/Broken/2017/Whatif/WhatifSkunk.png'),

    //Signs
    new TCarousel('../assets/images/Broken/2017/Signs Collection/Do-Not-Pass.png',
    ),
    new TCarousel('../assets/images/Broken/2017/Signs Collection/Polar Bridge.png'),
    
    new TCarousel('../assets/images/Broken/2017/Signs Collection/SlipperyWhenWet.png'),

    new TCarousel('../assets/images/Broken/2017/Signs Collection/Feed Racoon- nologo.png',
    ),
    new TCarousel('../assets/images/Broken/2017/Signs Collection/Slow Sloth.png'),
    
    new TCarousel('../assets/images/Broken/2017/Signs Collection/Stop-Dragonfly.png'),
    //Broken Stick
    new TCarousel('../assets/images/Broken/2017/BrokenStick/2017 black IChicken.png',
    ),
    new TCarousel('../assets/images/Broken/2017/BrokenStick/Bird on a Wire.jpg'),
    
    new TCarousel('../assets/images/Broken/2017/BrokenStick/Conan-FIRSTBASE-Broken.png'),
    
    ];
    private whatifs: TCarousel[] = [

    new TCarousel('../assets/images/Broken/2017/Whatif/WhatifElephant.png',
    ),
    new TCarousel('../assets/images/Broken/2017/Whatif/WhatifHippo.jpg'),
    
    new TCarousel('../assets/images/Broken/2017/Whatif/WhatifSkunk.png'),
    ];
    //Signs
    private signs: TCarousel[] = [
    new TCarousel('../assets/images/Broken/2017/Signs Collection/Do-Not-Pass.png',
    ),
    new TCarousel('../assets/images/Broken/2017/Signs Collection/Polar Bridge.png'),
    
    new TCarousel('../assets/images/Broken/2017/Signs Collection/SlipperyWhenWet.png'),

    new TCarousel('../assets/images/Broken/2017/Signs Collection/Feed Racoon- nologo.png',
    ),
    new TCarousel('../assets/images/Broken/2017/Signs Collection/Slow Sloth.png'),
    
    new TCarousel('../assets/images/Broken/2017/Signs Collection/Stop-Dragonfly.png'),
    ];

    	constructor(){}

    	getThumbs() {
    	return this.thumbs.slice(); 
    	}
    	getThumb(index: number){
    		return this.thumbs[index]; 
    	}
        getWhatIfs(){ 
            return this.whatifs.slice();
        }
        getWhatIf(index: number){
            return this.whatifs[index]; 
        }
        getSigns(){

            return this.signs.slice();
        }
        getSign(index: number){
            return this.signs[index]; 
        }
        
      
      
    	
       
}

