import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { GlobalFilter } from './common/filter/global-filter/global-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new GlobalFilter(httpAdapter));

  const options = new DocumentBuilder()
    .setTitle('Open Api Spec')
    .setDescription('Integration with the app')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(process.env.PORT ?? 8080);
}
void bootstrap();
