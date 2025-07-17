import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-extralight mb-4">Landing Page</h1>
      
      <div className="flex flex-col gap-4 mb-8">
        <h2 className="text-lg font-semibold">Button Sizes</h2>
        <div className="flex gap-4">
          <Button title="Small" size="small" />
          <Button title="Medium" size="medium" />
          <Button title="Large" size="large" />
        </div>
        
        <h2 className="text-lg font-semibold">Button Shapes</h2>
        <div className="flex gap-4">
          <Button title="Rounded Small" shape="rounded-sm" />
          <Button title="Rounded Medium" shape="rounded-md" />
          <Button title="Rounded Full" shape="rounded-full" />
        </div>
        
        <h2 className="text-lg font-semibold">Custom Buttons</h2>
        <div className="flex gap-4">
          <Button 
            title="Red Button" 
            className="bg-red-500 hover:bg-red-600"
          />
          <Button 
            title="Green Button" 
            className="bg-green-500 hover:bg-green-600"
            size="large"
            shape="rounded-full"
          />
        </div>
      </div>
      
      <Card />
    </div>
  )
}
export default Landing