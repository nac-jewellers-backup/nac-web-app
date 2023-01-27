export const GET_ALL_APPOINTMENT = `
query MyQuery {
  allAppointmentDates(orderBy: START_DATE_TIME_ASC) {
    nodes {
      createdAt
      startDate 
      id
      endDate
      userId
      startDateTime
    }
  }
  query {
    allStoreLocations {
      nodes {
        id
        name
      }
    }
  }
}

`;

export const GET_APPOINTMENT_TIME = `
query MyQuery($id: UUID) {
  allAppointmentDates(condition: { id: $id }) {
    nodes {
      id
      endDateTime
      endDate
      startDate
      startDateTime
      appointmentDateTimeSlotsByAppointmentDateId(
        orderBy: START_DATE_TIME_ASC
      ) {
        nodes {
          appointmentDateId
          endTime
          endDateTime
          id
          startDateTime
          startTime
        }
      }
    }
  }
}

`;

export const CREATE_OPPOINTMENT = `
mutation MyMutation(
  $customerName: String
  $email: String
  $mobile: String
  $mobileCountryCode: String
  $slotId: UUID
  $locationId: Int
) {
  createAppointment(
    input: {
      appointment: {
        customerName: $customerName
        email: $email
        isActive: true
        mobile: $mobile
        mobileCountryCode: $mobileCountryCode
        slotId: $slotId
        locationId: $locationId
      }
    }
  ) {
    appointment {
      customerName
      email
      id
      isActive
      mobile
      mobileCountryCode
      slotId
    }
  }
}


`;
