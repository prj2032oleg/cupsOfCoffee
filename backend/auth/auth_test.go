package auth

import (
	"testing"
)

func TestRegisterUser(t *testing.T) {
	// Create a new auth service
	service := NewAuthService()

	// Test successful registration
	t.Run("Successful Registration", func(t *testing.T) {
		user, err := service.RegisterUser("john@example.com", "John Doe")
		
		if err != nil {
			t.Errorf("Expected no error, got %v", err)
		}
		
		if user == nil {
			t.Fatal("Expected user to be returned, got nil")
		}
		
		if user.Email != "john@example.com" {
			t.Errorf("Expected email to be 'john@example.com', got '%s'", user.Email)
		}
		
		if user.Name != "John Doe" {
			t.Errorf("Expected name to be 'John Doe', got '%s'", user.Name)
		}
	})

	// Test duplicate email
	t.Run("Duplicate Email", func(t *testing.T) {
		// Try to register with the same email
		_, err := service.RegisterUser("john@example.com", "Another John")
		
		if err == nil {
			t.Error("Expected error for duplicate email, got nil")
		}
	})
}

func TestGetUserByID(t *testing.T) {
	// Create a new auth service
	service := NewAuthService()

	// Register a user first
	registeredUser, _ := service.RegisterUser("jane@example.com", "Jane Doe")

	// Test successful retrieval
	t.Run("Successful Retrieval", func(t *testing.T) {
		user, err := service.GetUserByID(registeredUser.ID)
		
		if err != nil {
			t.Errorf("Expected no error, got %v", err)
		}
		
		if user == nil {
			t.Fatal("Expected user to be returned, got nil")
		}
		
		if user.ID != registeredUser.ID {
			t.Errorf("Expected ID to be '%s', got '%s'", registeredUser.ID, user.ID)
		}
	})

	// Test non-existent user
	t.Run("Non-existent User", func(t *testing.T) {
		_, err := service.GetUserByID("non_existent_id")
		
		if err == nil {
			t.Error("Expected error for non-existent user, got nil")
		}
	})
}