const CLERK = {
    apiKey: process.env.CLERK_SECRET_KEY
}
const DATABASE = {
    URL: process.env.NODE_ENV === "test" ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL
}

// console.log(process.env.NODE_ENV, DATABASE.URL)

export default {
    CLERK,
    DATABASE
}
