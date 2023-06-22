import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  setSortOrder: (order: string) => void;
  selectedSortOrder: string;
}

const SortSelector = ({ setSortOrder, selectedSortOrder }: Props) => {
  const orderings = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = orderings.find((order) => order.value === selectedSortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort by : {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {orderings.map((order) => (
          <MenuItem onClick={() => setSortOrder(order.value)} key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

// null === "" for string

export default SortSelector;
