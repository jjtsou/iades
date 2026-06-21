"use client"

import { useRef, useState } from "react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Icon,
} from "@chakra-ui/react"
import { FiChevronDown } from "react-icons/fi"

type FilterOption = {
  value: string
  label: string
}

type FilterMenuProps = {
  value: string
  options: FilterOption[]
  onChange: (value: string) => void
}

const FilterMenu = ({ value, options, onChange }: FilterMenuProps) => {
  const btnRef = useRef<HTMLButtonElement>(null)
  const [menuWidth, setMenuWidth] = useState<number>()

  const selectedLabel = options.find(o => o.value === value)?.label ?? options[0]?.label

  return (
    <Menu
      placement="bottom"
      strategy="fixed"
      onOpen={() => setMenuWidth(btnRef.current?.offsetWidth)}
    >
      <MenuButton
        ref={btnRef}
        as={Button}
        w="full"
        variant="outline"
        bg="white"
        fontWeight="normal"
        textAlign="left"
        rightIcon={<Icon as={FiChevronDown} />}
      >
        {selectedLabel}
      </MenuButton>
      <MenuList
        w={menuWidth ? `${menuWidth}px` : undefined}
        minW={menuWidth ? `${menuWidth}px` : undefined}
      >
        {options.map(option => (
          <MenuItem
            key={option.value}
            onClick={() => onChange(option.value)}
            fontWeight={value === option.value ? "semibold" : "normal"}
            color={value === option.value ? "whatsapp.600" : undefined}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}

export default FilterMenu
