import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'

import { AppModule } from './app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	const config = await app.get(ConfigService)
	const port = config.get<number>('API_PORT')
	const host = config.get('API_HOST')
	await app.listen(port || 3000, host, () => {
		console.log(`App started on port: ${port}`)
	})
}

bootstrap()