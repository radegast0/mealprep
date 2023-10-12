import { GraphQLClient, gql } from "graphql-request"

export const graphcms = new GraphQLClient(process.env.REACT_APP_API, {
    headers:{
        Authorization:`Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTYyNzkyNzQsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xuMjNsdWR1MTltOTAxdWkzYmJnMTVoMy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiY2NjZDljYzAtZmZiNC00NjY2LWFhN2MtZTVjYjM1NzM3MmI5IiwianRpIjoiY2xuOWN2c3VxMXh1NDAxdWdkazY5ZGY0MiJ9.YbTaMw-gySuV5m_0TK4xrE2Br6pet8_cxoBRxj5EJu7ZV__wa1dzEqPWiUQywx7NKStndOmCSFkxkZ_y7KapFnSNknVT1PB44jLTYRAdwbQrHy6LG8iJt1Ka_ypEnJV24J6DKDy4Gcxi9pL-ZzL8m4xZIzW57Mr7VlTmbLNg-uuJL7BqTyH_-DoxzntgEW_wXfl1oYxJWmQ92E71t6U4VoUYzGcsMmNG9lh2vaevptS8H4qVYl7TMvXcVl-8AahmPTduHvQQhGcxbg154KANH1nY8mRpoRq1cU7LZjPOBiKcZPyZVMFxH7ejNU8_Wm8oPXAmZDqBsfaq-Z0xbEmkY2EABtXG7t3lREbTuJxK7A6IvbaQPVJmeo7nU-HpiJN-cxTDv3Uo3VN31BWYRu-DSIgHMljxmufQwHdSpGh0WjUeMK0acMaq04DeOgNuoPXEzlkbXo6Q4S8SH2A9jbivfzCfUne8D2_Pev9eHGpITqnX4g_9DklnqvTBxr9DU-EAp6ezXKSFbsNZZ5cYV2yE-QCIpyquQ1B44z7o3sf8UaZGFPA5trDCKU3d2sZc5kAtg8y7hmI5r5XHs0oxMfnBgQLf64lQxlS1GE54Bpw2l386xzII9QdlCOzk0WyGpwd813WgmcROV7ZIVqNMtlcrwjgsv8c3jukWabcY0laJilw`
    }
})

export const QUERY_USER = gql`
{
  categories {
    name
    email
    createdAt
    id
    publishedAt
    updatedAt
    meals {
      title
      calories
      ingredient
      mealNumber
      slug
      photos {
        url  
      }
    }
  }
}
`

export const INSERT_MEALS = gql`
mutation createOneRelation {
  createMeal(
    data: {
      title: $title
      calories: $calories
      ingredient: $ingredients
      mealNumber: $mealNumber
      photos: $photos
    }
  ) {
    id
    title
    calories
    ingredient
    mealNumber
    photos
  }
}
`


export const QUERY_MEALS = gql`
{ 
  meals{
  title
  calories
  ingredient
  id
  mealNumber
}}
`
// export const QUERY_USERS = gql`
// {
//   NextUser {
//     id 
//     email : $String
//     password
//   }
// }
// `