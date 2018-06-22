import {Injectable} from '@angular/core'; 
import { TCarousel } from './carousel.model';

import {Subject } from 'rxjs/Subject'; 

@Injectable()

export class CarouselService {
    thumbsChanged = new Subject<TCarousel[]>();
<<<<<<< HEAD
    whatifsChanged = new Subject<TCarousel[]>(); 
    signsChanged = new Subject<TCarousel[]>(); 
    
=======
>>>>>>> 96911c554a5d2c5e490b720523c328313a65f0bd
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
<<<<<<< HEAD
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
=======
>>>>>>> 96911c554a5d2c5e490b720523c328313a65f0bd

    	constructor(){}

    	getThumbs() {
    	return this.thumbs.slice(); 
    	}
    	getThumb(index: number){
    		return this.thumbs[index]; 
    	}
<<<<<<< HEAD
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
=======
        getWhatIf(){ 
            return this.thumbs.slice(0,3);
        }
        getSigns(){
            return this.thumbs.slice(3,8);
>>>>>>> 96911c554a5d2c5e490b720523c328313a65f0bd
        }
        
      
      
    	
       
}

