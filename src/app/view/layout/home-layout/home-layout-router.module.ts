import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './view/home-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children :[
      {
        path : 'page1',
        loadChildren : "src/app/view/pages/page1/page1.module#Page1Module"
      
      },
      {
        path : 'page2',
        loadChildren : "src/app/view/pages/page2/page2.module#Page2Module"
      
      },
      {
        path : 'page3',
        loadChildren : "src/app/view/pages/page3/page3.module#Page3Module"
      
      },
      {
        path : 'page4',
        loadChildren : "src/app/view/pages/page4/page4.module#Page4Module"
      
      },
      // {
      //   path : 'page5',
      //   loadChildren : "src/app/view/pages/page5/page5.module#Page5Module"
      // }
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeLayoutRouterModule { }
