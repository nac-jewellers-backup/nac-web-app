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
