import { Component } from '@angular/core';
import { Hero} from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Tour of Heros';
  heros=[new Hero(1,'DQ','http://img.nowrunning.com/content/Artist/DulquerSalman/banner.jpg'),
  new Hero(2,'SRK','http://gdtmedia.india.com/data/topics/image/1/34471/c4995f9e9138ec4f766cf336190bd152_org_225X300_1.jpg'),
  new Hero(3,'RAJANI',''),
  new Hero(4,'LAL','')];
  myHero=this.heros[0];
  isUnchanged = false;

}
