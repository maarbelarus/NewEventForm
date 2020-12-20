interface CategoryItem {
  id: number;
  name: string;
}

interface CoordinatorItem {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

export interface INewEventState {
  categoryData: CategoryItem[];
  coordinatorData: CoordinatorItem[];
}
