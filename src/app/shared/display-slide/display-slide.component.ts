import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AngularComponent } from '../logos/angular/angular.component';
import { ReactComponent } from '../logos/react/react.component';
import { VueComponent } from '../logos/vue/vue.component';
import { AspnetComponent } from '../logos/aspnet/aspnet.component';
import { JqueryComponent } from '../logos/jquery/jquery.component';
import { BlazorComponent } from '../logos/blazor/blazor.component';
import { CommonModule } from '@angular/common';
import { ThymeleafComponent } from '../logos/thymeleaf/thymeleaf.component';
import { RedisComponent } from '@shared/logos/redis/redis.component';
import { MongoComponent } from '../logos/mongo/mongo.component';
import { ElasticSearchComponent } from '@shared/logos/elastic-search/elastic-search.component';
import { PostgresComponent } from '@shared/logos/postgres/postgres.component';
import { MysqlComponent } from '../logos/mysql/mysql.component';
import { FlaskComponent } from '@shared/logos/flask/flask.component';
import { PowerBiComponent } from '@shared/logos/power-bi/power-bi.component';
import { PostmanComponent } from '@shared/logos/postman/postman.component';
import { GitComponent } from '@shared/logos/git/git.component';
import { JenkingsComponent } from '@shared/logos/jenkings/jenkings.component';
import { SqlServerComponent } from '@shared/logos/sql-server/sql-server.component';
import { AwsComponent } from '@shared/logos/aws/aws.component';
import { AzureComponent } from '@shared/logos/azure/azure.component';
import { HtmlComponent } from '../logos/html/html.component';
import { JavascriptComponent } from '../logos/javascript/javascript.component';
import { TypescriptComponent } from '../logos/typescript/typescript.component';
import { IonicComponent } from '../logos/ionic/ionic.component';
import { JavaComponent } from '../logos/java/java.component';
import { SybaseComponent } from '../logos/sybase/sybase.component';
import { OracleComponent } from '../logos/oracle/oracle.component';
import { UnityComponent } from '../logos/unity/unity.component';
import { SwiftComponent } from '../logos/swift/swift.component';
import { KotlinComponent } from '../logos/kotlin/kotlin.component';
import { FlutterComponent } from '../logos/flutter/flutter.component';
import { FigmaComponent } from '../logos/figma/figma.component';
import { AdobeXdComponent } from '../logos/adobe-xd/adobe-xd.component';
import { MiroComponent } from '../logos/miro/miro.component';
import { FirebaseComponent } from '../logos/firebase/firebase.component';
import { PythonComponent } from '../logos/python/python.component';
import { RubyComponent } from '../logos/ruby/ruby.component';
import { PhpComponent } from '../logos/php/php.component';
import { NodejsComponent } from '../logos/nodejs/nodejs.component';
import { NetframeworkComponent } from '../logos/netframework/netframework.component';
import { NetcoreComponent } from '../logos/netcore/netcore.component';
import { GitlabComponent } from '../logos/gitlab/gitlab.component';
import { DartComponent } from "../logos/dart/dart.component";
import { JunitComponent } from "../logos/junit/junit.component";
import { SpringComponent } from "../logos/spring/spring.component";
import { SwaggerComponent } from "../logos/swagger/swagger.component";
import { SeleniumComponent } from "../logos/selenium/selenium.component";
import { JmeterComponent } from "../logos/jmeter/jmeter.component";
import { OpenshiftComponent } from "../logos/openshift/openshift.component";
import { DockerComponent } from "../logos/docker/docker.component";
import { LambdaComponent } from "../logos/lambda/lambda.component";
import { GlueComponent } from "../logos/glue/glue.component";
import { S3bucketComponent } from "../logos/s3bucket/s3bucket.component";
import { BitbucketComponent } from "../logos/bitbucket/bitbucket.component";

@Component({
  selector: 'app-display-slide',
  standalone: true,
  imports: [
    CommonModule,
    AngularComponent,
    ReactComponent,
    // VueComponent,
    // AspnetComponent,
    // JqueryComponent,
    // BlazorComponent,
    // ThymeleafComponent,
    // RedisComponent,
    MongoComponent,
    // ElasticSearchComponent,
    PostgresComponent,
    MysqlComponent,
    // FlaskComponent,
    // PowerBiComponent,
    PostmanComponent,
    GitComponent,
    JenkingsComponent,
    SqlServerComponent,
    AwsComponent,
    AzureComponent,
    HtmlComponent,
    JavascriptComponent,
    TypescriptComponent,
    IonicComponent,
    JavaComponent,
    SybaseComponent,
    OracleComponent,
    UnityComponent,
    SwiftComponent,
    KotlinComponent,
    FlutterComponent,
    FigmaComponent,
    AdobeXdComponent,
    MiroComponent,
    FirebaseComponent,
    PythonComponent,
    RubyComponent,
    PhpComponent,
    NodejsComponent,
    NetframeworkComponent,
    NetcoreComponent,
    GitlabComponent,
    DartComponent,
    JunitComponent,
    SpringComponent,
    SwaggerComponent,
    SeleniumComponent,
    JmeterComponent,
    OpenshiftComponent,
    DockerComponent,
    LambdaComponent,
    GlueComponent,
    S3bucketComponent,
    BitbucketComponent
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
      title: 'Frontend Development',
      stack: 'front',

      subsection: ['Languages', 'Mobile', 'UX/UI Design'],
    },
    {
      title: 'Backend Development',
      stack: 'back',
      subsection: ['Languages', 'Databases', 'Framework'],
    },
    {
      title: 'DevOps Tools',
      stack: 'devops',
      subsection: [
        'Deployment',
        'Versioning',
        'Testing',
        // 'Static Analisis',

        'CI/CD',
        'Cloud',
      ],
    },
    // {
    //   title: 'Business Intelligence',
    //   stack: 'bi',

    // },
    // {
    //   title: 'Others',
    //   stack: 'bi',
    // },
  ];
}
