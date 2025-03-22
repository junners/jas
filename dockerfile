FROM node:alpine AS base
USER root
RUN addgroup -S pod && adduser -S pod -G pod

FROM base AS builder
WORKDIR /app
COPY . /app
RUN npm install && npm run build
ENTRYPOINT [ "npm", "run", "test" ]

FROM base AS runtime
WORKDIR /node/app
COPY --chown=pod:pod --from=builder /app/dist /node/app/dist
COPY --chown=pod:pod --from=builder /app/package.json /node/app/package.json
RUN chown -R pod:pod /node/app

USER pod
RUN npm install --omit=dev --ignore-scripts
CMD ["npm", "run", "start:prod"]
EXPOSE 8080
