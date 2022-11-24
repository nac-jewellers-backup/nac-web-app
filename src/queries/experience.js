export const GET_DETAILS =`
query {
    product_category: allMasterProductCategories(orderBy: NAME_ASC) {
      nodes {
        name
      }
    }
    metal_type: allMasterMaterials(orderBy: FILTER_ORDER_ASC) {
      nodes {
        name
      }
    }
    locations: allStoreLocations {
      nodes {
        id
        name
        isActive
        lat
        long
        address
      }
    }
  }
`

export const UPDATE_DETAILS =`
  mutation($appointment_id: Int!, $patch: AppointmentPatch!) {
    updateAppointmentById(
      input: { id: $appointment_id, appointmentPatch: $patch }
    ) {
      appointment {
        id
      }
    }
  }
`