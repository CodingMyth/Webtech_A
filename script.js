document.addEventListener('DOMContentLoaded', function() {
    const employeeForm = document.getElementById('employeeForm');
    
    if (employeeForm) {
        employeeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error messages
            document.querySelectorAll('.error').forEach(el => el.textContent = '');
            
            // Get form values
            const employeeId = document.getElementById('employeeId').value.trim();
            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const department = document.getElementById('department').value;
            const joiningDate = document.getElementById('joiningDate').value;
            const gender = document.querySelector('input[name="gender"]:checked');
            const employmentType = document.getElementById('employmentType').checked ? 'Full-Time' : '';
            
            // Validation flags
            let isValid = true;
            
            // 1. Employee ID Validation
            if (!employeeId) {
                document.getElementById('employeeIdError').textContent = 'Employee ID is required';
                isValid = false;
            } else if (!/^EMP\d{3}$/.test(employeeId)) {
                document.getElementById('employeeIdError').textContent = 'ID must be in format EMP followed by 3 digits';
                isValid = false;
            }
            
            // 2. Full Name Validation
            if (!fullName) {
                document.getElementById('fullNameError').textContent = 'Full name is required';
                isValid = false;
            } else if (!/^[a-zA-Z\s]{2,50}$/.test(fullName)) {
                document.getElementById('fullNameError').textContent = 'Name must be 2-50 characters with only letters and spaces';
                isValid = false;
            }
            
            // 3. Email Validation
            if (!email) {
                document.getElementById('emailError').textContent = 'Email is required';
                isValid = false;
            } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                document.getElementById('emailError').textContent = 'Please enter a valid email address';
                isValid = false;
            }
            
            // 4. Department Validation
            if (!department) {
                document.getElementById('departmentError').textContent = 'Please select a department';
                isValid = false;
            }
            
            // 5. Joining Date Validation
            if (!joiningDate) {
                document.getElementById('joiningDateError').textContent = 'Joining date is required';
                isValid = false;
            } else {
                const selectedDate = new Date(joiningDate);
                const currentDate = new Date();
                
                if (selectedDate > currentDate) {
                    document.getElementById('joiningDateError').textContent = 'Joining date cannot be in the future';
                    isValid = false;
                }
            }
            
            // 6. Gender Validation
            if (!gender) {
                document.getElementById('genderError').textContent = 'Please select a gender';
                isValid = false;
            }
            
            // If validation passes, redirect to success page

        });
        
        // Reset form handler
        employeeForm.addEventListener('reset', function() {
            document.getElementById('employeeDisplay').style.display = 'none';
            document.querySelectorAll('.error').forEach(el => el.textContent = '');
        });
    }
});