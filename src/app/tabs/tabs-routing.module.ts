import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'view-article/:id',
        loadChildren: () => import('../view-article/view-article.module').then( m => m.ViewArticlePageModule)
      },
      {
        path: 'view-vote',
        loadChildren: () => import('../view-vote/view-vote.module').then( m => m.ViewVotePageModule)
      },
      {
        path: 'send-complaint',
        loadChildren: () => import('../send-complaint/send-complaint.module').then( m => m.SendComplaintPageModule)
      },
      {
        path: 'send-proposal',
        loadChildren: () => import('../send-proposal/send-proposal.module').then( m => m.SendProposalPageModule)
      },
      {
        path: 'send-project',
        loadChildren: () => import('../send-project/send-project.module').then( m => m.SendProjectPageModule)
      },
      {
        path: 'all-complaints',
        loadChildren: () => import('../all-complaints/all-complaints.module').then( m => m.AllComplaintsPageModule)
      },
      {
        path: 'view-complaint',
        loadChildren: () => import('../view-complaint/view-complaint.module').then( m => m.ViewComplaintPageModule)
      },
      {
        path: 'edit-info',
        loadChildren: () => import('../edit-info/edit-info.module').then( m => m.EditInfoPageModule)
      },
      {
        path: 'change-pass',
        loadChildren: () => import('../change-pass/change-pass.module').then( m => m.ChangePassPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
