


export default function getCenter(centerId: number) {
  switch (centerId) {
    case 0:
      return {
        name: 'Charitee',
        address: 'Charitépl. 1, 10117 Berlin'
      }
    case 1:
      return {
        name: 'Alexianer St. Hedwig-Krankenhaus',
        address: 'Große Hamburger Str. 5-11, Berlin'
      }
    case 2:
      return {
        name: 'Jewish Hospital Berlin',
        address: 'Heinz-Galinski-Straße 1'
      }
  }
}
