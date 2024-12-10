import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularComponent } from '../logos/angular/angular.component';
import { ReactComponent } from '../logos/react/react.component';
import { VueComponent } from '../logos/vue/vue.component';
import { AspnetComponent } from '../logos/aspnet/aspnet.component';
import { JqueryComponent } from '../logos/jquery/jquery.component';
import { BlazorComponent } from '../logos/blazor/blazor.component';
import { CommonModule } from '@angular/common';
import { ThymeleafComponent } from "../logos/thymeleaf/thymeleaf.component";
import { RedisComponent } from '@shared/logos/redis/redis.component';
import { MongoComponent } from "../logos/mongo/mongo.component";
import { ElasticSearchComponent } from '@shared/logos/elastic-search/elastic-search.component';
import { PostgresComponent } from '@shared/logos/postgres/postgres.component';
import { MysqlComponent } from "../logos/mysql/mysql.component";
import { FlaskComponent } from '@shared/logos/flask/flask.component';
import { PowerBiComponent } from '@shared/logos/power-bi/power-bi.component';
import { PostmanComponent } from '@shared/logos/postman/postman.component';
import { GitComponent } from '@shared/logos/git/git.component';
import { JenkingsComponent } from '@shared/logos/jenkings/jenkings.component';
import { SqlServerComponent } from '@shared/logos/sql-server/sql-server.component';
import { AwsComponent } from '@shared/logos/aws/aws.component';
import { AzureComponent } from '@shared/logos/azure/azure.component';

@Component({
  selector: 'app-display-slide',
  standalone: true,
  imports: [
    CommonModule,
    AngularComponent,
    ReactComponent,
    VueComponent,
    AspnetComponent,
    JqueryComponent,
    BlazorComponent,
    ThymeleafComponent,
    RedisComponent,
    MongoComponent,
    ElasticSearchComponent,
    PostgresComponent,
    MysqlComponent,
    FlaskComponent,
    PowerBiComponent,
    PostmanComponent,
    GitComponent,
    JenkingsComponent,
    SqlServerComponent,
    AwsComponent,
    AzureComponent
],
  templateUrl: './display-slide.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplaySlideComponent {
  public stackList = [
    {
      title: 'Frontend',
      stack: 'front',
      subsection: [
        // 'Web', 'Mobile', 'Desktop'
      ],
    },
    {
      title: 'Backend ',
      stack: 'back',
      // subsection: ['Languages', 'Databases'],
    },
    {
      title: 'Business Intelligence',
      stack: 'bi',
    },
    {
      title: 'DevOps',
      stack: 'devops',
      // subsection: ['Testing', 'Static Analisis', 'Deployment', 'Versioning', 'CI/CD', 'Cloud'],
    },
  ];
}
