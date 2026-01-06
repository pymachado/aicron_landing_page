FROM node:20-alpine

WORKDIR /app

# Copiamos package files primero (mejor cache)
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Build (equivale a tsx script/build.ts)
RUN npm run build

ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000

# Producción
CMD ["node", "dist/index.cjs"]
