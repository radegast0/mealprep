import { GraphQLClient, gql } from "graphql-request"




export const graphcms = new GraphQLClient(process.env.REACT_APP_API, {
    headers:{
        Authorization:`Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTU5MTM1NzYsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xuMjNsdWR1MTltOTAxdWkzYmJnMTVoMy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNzk5ZDMyNDktZjY0OC00NmQwLTlhMGUtMDY2YWI0NzJiZTRhIiwianRpIjoiY2xuM2I1bWE1MXpxNzAxdW9jdWFrY28wZCJ9.d_zCtrLbLi0YS0dpZA9IYeQf5fLnAjkgTTBItXmMlt90y7xtIXWEHvgcRiV719gnoQT2jxuGRsQEIKf9i35-QHc2CgSQjVT5ASDyVeY0mP06xe-Y2gvetHPOPW-uSRjANWqGQLII1-eJyod8QUvXujrvBNYy3QqqmjEb_e9l4trhr42AhxD_QS9SedEJTl-zIKUVvmQUr8a-nRC9MMLjVE6fOuZJL0ZLzfsvYqqpr_mgC3jnLYf4wS8XMHAb8TfrC_NkpoY2vdniewAWrc7DgZlx0sdptYfaBW_E6h9ZfrfPrZ2wKnuHNivrMK92D9XSKMxgaETYZ7845h6lWU-nfe-73dIzFF19v_gp5JLozjJ7G_BpSM66lLx7XaGMzLzVzWUt8JwItfknrdIdYWUwIoyio3Wrr717k_OZFVXVkqsg3AFQs2aPexrtwofHayAbm49rDVc9FdnD-1GAVbanCyKQFSmmAUivdimoTCyd36ICzdLAbS_ypPaagPPaeels95AzNkSeEoYaYGsBWWUGyMTYGh0Qm2EgmuzJFVFU8hj2MZ7tuGP-tprzHp0tAuE0vzZj7BK2w285XUlTUCVJRaNGeySUnA7CpzUIomxlhRVJIeKketOJi7FRRK7N_VCXT6WbeYOzuaEceddt8IhMhVtKM_gFbHdR-kcMqIxQy54`
    }
})

export const QUERY_USER = gql`
{
    categories {
        createdAt
        id
        publishedAt
        updatedAt
        meals {
          title
          calories
          ingredient
          
        }
        
      }
      
}
`
