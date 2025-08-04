import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  const config = new DocumentBuilder()
    .setTitle('Cardápio Diário API')
    .setDescription('API para gerenciar pedidos de refeições')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // http://localhost:3000/api

  app.enableCors({
    origin: '*', // Permite todas as origens
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Permite todos os métodos HTTP
    allowedHeaders: 'Content-Type, Accept', // Permite os cabeçalhos especificados    
  });

  await app.listen(3077);
}
bootstrap();
