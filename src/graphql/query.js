import { GraphQLClient, gql } from "graphql-request"




export const graphcms = new GraphQLClient(process.env.REACT_APP_API, {
    headers:{
        Authorization:`Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTU4NDQ4OTQsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xuMjNsdWR1MTltOTAxdWkzYmJnMTVoMy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNDFmOTRkOTItMWI4MC00NDI4LWIwZWEtZDFmMDUyZDE0YzI3IiwianRpIjoiY2xuMjY5ajduMWdqbzAxdWYxamMyMXpjbyJ9.HhVnp8XgIGnnhS_AlCKsy5fDR0Wgvx05_Bub8BEEjMAXgxIiX6FQQcoQhPTof3o_dt-KRxfWz7ob1CpsqCCcp85I_RUswiE5DvJz_IrjZjj_TSUsK5-Y0tD9Yj-EySehrl57RWwsTuRiDOPJZsHpNBT0pAb0NfPQvC_kw0WmKQnIuSwudPc1ePzRNYEbPv6bbjiN3shEDEwqH8aptWSfrRli_j0y1Ck4gO-cAsE579yRNf23XR7wDKWvuY1bCzg9EQS44zdh_KaFHzMDbvBUChtRq4NEjorddOOxCf0-LPCDVFVDWTebvZNib6n-damzZ8-PI6o2uMbRfk0WP0k7-KD8MN9xAxCkK3dXhvFCrAnNPIWrE2tUPkJSkpYPAcynhKPpmpfyZbPITxvGZv0-uxB6RhPyjwPm6XQX1yzzw-R6k7tV_KIcwSpLO1-mGuNxurr_NORwlP-8EGskKzL3RFvy6rvfddDX8BbWeHEKcxqmzv8OgRELF3wtVl7-yPFKFi2hNpo82mV_mgNJBWCcSUbtzdL77kswCB4k1mAnvkaWr2LziZvbHGIJ3pcFSndAj_BlbsYFT_xrAbnTp8_aE6PUvwHq4Sl5j3Fs658UkLRv9oZGIN0J8uJzVgAEaAK8axRB435ISV81tmFj7lIJAQHEdeo33KgHl_g7XwGphrs`
    }
})

export const QUERY_USER = gql`
{
    categories {
        createdAt
        id
        ingredient
        meal
        publishedAt
        updatedAt
        calories
      }
}
`
