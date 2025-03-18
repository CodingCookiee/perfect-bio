import { Button } from "./button"
import { Loader2 } from "lucide-react"

const LoadingButton = ({ 
  isLoading, 
  loadingText = "Loading...", 
  children, 
  variant = "default", 
  size = "default", 
  ...props 
}) => {
  return (
    <Button
      disabled={isLoading}
      variant={variant}
      size={size}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className=" h-6 w-6 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  )
}

export { LoadingButton }