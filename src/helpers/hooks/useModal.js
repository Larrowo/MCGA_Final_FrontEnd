import { useState } from 'react'

function useModal () {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return [isModalOpen, handleToggleModal]
}
export default useModal
