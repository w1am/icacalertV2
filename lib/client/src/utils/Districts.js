export const District = (dname) => {
  switch(dname) {
    case 'portlouis':
      return 'Port Louis'
    case 'pamplemousses':
      return 'Pamplemousses'
    case 'grandport':
      return 'Grand Port'
    case 'savanne':
      return 'Savanne'
    case 'moka':
      return 'Moka'
    case 'rivièredurempart':
      return 'Riviere Du Rempart'
    case 'plaineswilhems':
      return 'Plaines Wilhems'
    case 'blackriver':
      return 'Black River'
    case 'flacq':
      return 'Flacq'
    default:
      return 'Unknown Place'
  }
}
