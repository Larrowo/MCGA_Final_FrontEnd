export const calculateAge = (birthDate) => {
  const today = new Date()
  const formattedDate = new Date(birthDate)

  const age = today.getFullYear() - formattedDate.getFullYear() -
               (today.getMonth() < formattedDate.getMonth() ||
               (today.getMonth() === formattedDate.getMonth() && today.getDate() < formattedDate.getDate()))
  return age
}
