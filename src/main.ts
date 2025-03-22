import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { GlobalFilter } from './common/filter/global-filter/global-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new GlobalFilter(httpAdapter));

  const options = new DocumentBuilder()
    .setTitle('Usable APIs')
    .setDescription(
      'All APIs are set to public and could be used without authorization',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('internals/api/docs', app, document);

  await app.listen(process.env.PORT ?? 8080);
}
void bootstrap();
