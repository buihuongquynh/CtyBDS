import { List} from 'antd';
import Card from './card';
const retail = ({product}) => {
  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 3,
        xxl: 3,
      }}
      dataSource={product}
      renderItem={(item) => (
        <List.Item>
          <Card item={item}/>
        </List.Item>
      )}
    />
  );
};
export default retail;
