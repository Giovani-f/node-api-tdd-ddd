export const env = {
  facebookApi: {
    clientId: process.env.FB_CLIENT_ID ?? '722497688817577',
    clientSecret: process.env.FB_CLIENT_SECRET ?? '79fb7a716698a92e3a1ff58d9230e1af'
  },
  port: process.env.PORT ?? 8080,
  jwtSecret: process.env.JWT_SECRET ?? '82a283fb-a608-4786-afd2-053df4d15ccb'
}
