package auth

import (
	"errors"
	"time"
)

// User represents a user in the system
type User struct {
	ID        string
	Email     string
	Name      string
	CreatedAt time.Time
}

// AuthService provides authentication functionality
type AuthService struct {
	// In a real implementation, this would be connected to a database
	users map[string]User
}

// NewAuthService creates a new authentication service
func NewAuthService() *AuthService {
	return &AuthService{
		users: make(map[string]User),
	}
}

// RegisterUser registers a new user in the system
func (s *AuthService) RegisterUser(email, name string) (*User, error) {
	// Check if user already exists
	for _, user := range s.users {
		if user.Email == email {
			return nil, errors.New("user with this email already exists")
		}
	}

	// Create new user
	user := User{
		ID:        generateID(),
		Email:     email,
		Name:      name,
		CreatedAt: time.Now(),
	}

	// Store user
	s.users[user.ID] = user

	return &user, nil
}

// GetUserByID retrieves a user by their ID
func (s *AuthService) GetUserByID(id string) (*User, error) {
	user, exists := s.users[id]
	if !exists {
		return nil, errors.New("user not found")
	}
	return &user, nil
}

// generateID creates a simple ID for demonstration purposes
// In a real application, use a proper UUID library
func generateID() string {
	return "user_" + time.Now().Format("20060102150405")
}