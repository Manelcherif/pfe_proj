import React, { useState, useEffect, useRef } from 'react';
import './css/creeAnonce.css';

function CreeAnnonce({ admin, departments, regions, employmentTypes, experienceLevels, skills, specialties }) {
  const [formData, setFormData] = useState({
    title: '',
    department: '',
    region: '',
    employment_type: '',
    experience_level: '',
    publish_date: '',
    application_deadline: '',
    short_description: '',
    description: '',
    skills: [],
    specialties: [],
    salary_range: '',
    benefits: '',
    application_instructions: '',
  });

  const [errors, setErrors] = useState({});
  const richTextEditorRef = useRef(null);

  useEffect(() => {
    // Initialize publish_date and application_deadline min dates
    const today = new Date().toISOString().split('T')[0];
    if (!formData.publish_date) {
      setFormData((prev) => ({ ...prev, publish_date: today }));
    }
    if (!formData.application_deadline) {
      setFormData((prev) => ({ ...prev, application_deadline: today }));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, selectedOptions } = e.target;
    if (type === 'select-multiple') {
      const values = Array.from(selectedOptions, (option) => option.value);
      setFormData((prev) => ({ ...prev, [name]: values }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const execCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    richTextEditorRef.current.focus();
  };

  const handleDescriptionChange = () => {
    setFormData((prev) => ({ ...prev, description: richTextEditorRef.current.innerHTML }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Le titre est requis';
    if (!formData.department) newErrors.department = 'Le département est requis';
    if (!formData.region) newErrors.region = 'La région est requise';
    if (!formData.employment_type) newErrors.employment_type = 'Le type de contrat est requis';
    if (!formData.experience_level) newErrors.experience_level = 'Le niveau d\'expérience est requis';
    if (!formData.publish_date) newErrors.publish_date = 'La date de publication est requise';
    if (!formData.application_deadline) newErrors.application_deadline = 'La date limite est requise';
    if (new Date(formData.application_deadline) < new Date(formData.publish_date)) {
      newErrors.application_deadline = 'La date limite doit être après la date de publication';
    }
    if (!formData.short_description) newErrors.short_description = 'La description courte est requise';
    if (!formData.description || richTextEditorRef.current?.innerText.trim().length < 50) {
      newErrors.description = 'La description doit contenir au moins 50 caractères';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleDescriptionChange();
    if (validateForm()) {
      // Submit form data to backend API
      console.log('Submitting form data:', formData);
      // Implement API call here
    }
  };

  return (
    <main className="main-content">
      <div className="header">
        <h1 className="page-title">Créer une annonce</h1>
        <a href="/job_listings" className="btn btn-view-listings">
          <i className="fas fa-list"></i> Liste des annonces
        </a>

        <div className="user-info">
          <span className="user-name">{admin.nom_admin} {admin.prenom}</span>
          <div className="user-avatar">{admin.nom_admin.charAt(0)}{admin.prenom.charAt(0)}</div>
        </div>
      </div>

      <div className="form-container">
        <form id="jobPostingForm" onSubmit={handleSubmit}>

          {/* Job Details Section */}
          <div className="form-section">
            <h2 className="section-title"><i className="fas fa-info-circle"></i> Informations générales</h2>

            <div className="form-group">
              <label htmlFor="id_title">Titre du poste *</label>
              <input
                type="text"
                id="id_title"
                name="title"
                placeholder="Ex: Développeur Full Stack"
                required
                value={formData.title}
                onChange={handleInputChange}
              />
              {errors.title && <div className="error-message">{errors.title}</div>}
            </div>

            <div className="form-row">
              <div className="form-col">
                <label htmlFor="id_department">Département *</label>
                <select
                  id="id_department"
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionner un département</option>
                  {departments.map((dept) => (
                    <option key={dept.id} value={dept.id}>{dept.nom_departement}</option>
                  ))}
                </select>
                {errors.department && <div className="error-message">{errors.department}</div>}
              </div>
              <div className="form-col">
                <label htmlFor="id_region">Région *</label>
                <select
                  id="id_region"
                  name="region"
                  required
                  value={formData.region}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionner une région</option>
                  {regions.map((region) => (
                    <option key={region.id} value={region.id}>{region.get_nom_display}</option>
                  ))}
                </select>
                {errors.region && <div className="error-message">{errors.region}</div>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-col">
                <label htmlFor="id_employment_type">Type de contrat *</label>
                <select
                  id="id_employment_type"
                  name="employment_type"
                  required
                  value={formData.employment_type}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionner un type</option>
                  {employmentTypes.map((type) => (
                    <option key={type[0]} value={type[0]}>{type[1]}</option>
                  ))}
                </select>
                {errors.employment_type && <div className="error-message">{errors.employment_type}</div>}
              </div>
              <div className="form-col">
                <label htmlFor="id_experience_level">Niveau d'expérience *</label>
                <select
                  id="id_experience_level"
                  name="experience_level"
                  required
                  value={formData.experience_level}
                  onChange={handleInputChange}
                >
                  <option value="">Sélectionner un niveau</option>
                  {experienceLevels.map((level) => (
                    <option key={level[0]} value={level[0]}>{level[1]}</option>
                  ))}
                </select>
                {errors.experience_level && <div className="error-message">{errors.experience_level}</div>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-col">
                <label htmlFor="id_publish_date">Date de publication *</label>
                <input
                  type="date"
                  id="id_publish_date"
                  name="publish_date"
                  required
                  value={formData.publish_date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.publish_date && <div className="error-message">{errors.publish_date}</div>}
              </div>
              <div className="form-col">
                <label htmlFor="id_application_deadline">Date limite de candidature *</label>
                <input
                  type="date"
                  id="id_application_deadline"
                  name="application_deadline"
                  required
                  value={formData.application_deadline}
                  onChange={handleInputChange}
                  min={formData.publish_date || new Date().toISOString().split('T')[0]}
                />
                {errors.application_deadline && <div className="error-message">{errors.application_deadline}</div>}
              </div>
            </div>
          </div>

          {/* Job Description Section */}
          <div className="form-section">
            <h2 className="section-title"><i className="fas fa-align-left"></i> Description du poste</h2>

            <div className="form-group">
              <label htmlFor="id_short_description">Brève description (résumé) *</label>
              <textarea
                id="id_short_description"
                name="short_description"
                placeholder="Écrivez un bref résumé du poste (max 300 caractères)"
                maxLength={300}
                required
                value={formData.short_description}
                onChange={handleInputChange}
              />
              {errors.short_description && <div className="error-message">{errors.short_description}</div>}
            </div>

            <div className="form-group">
              <label>Description détaillée *</label>
              <div className="editor-container">
                <div className="toolbar">
                  <div className="toolbar-group">
                    <button type="button" className="format-btn" onClick={() => execCommand('bold')} title="Gras">
                      <i className="fas fa-bold"></i>
                    </button>
                    <button type="button" className="format-btn" onClick={() => execCommand('italic')} title="Italique">
                      <i className="fas fa-italic"></i>
                    </button>
                    <button type="button" className="format-btn" onClick={() => execCommand('underline')} title="Souligné">
                      <i className="fas fa-underline"></i>
                    </button>
                  </div>
                  <div className="toolbar-group">
                    <button type="button" className="format-btn" onClick={() => execCommand('insertUnorderedList')} title="Liste à puces">
                      <i className="fas fa-list-ul"></i>
                    </button>
                    <button type="button" className="format-btn" onClick={() => execCommand('insertOrderedList')} title="Liste numérotée">
                      <i className="fas fa-list-ol"></i>
                    </button>
                  </div>
                  <div className="toolbar-group">
                    <button type="button" className="format-btn" onClick={() => execCommand('formatBlock', '<h2>')} title="Titre">
                      <i className="fas fa-heading"></i>
                    </button>
                    <button type="button" className="format-btn" onClick={() => execCommand('formatBlock', '<blockquote>')} title="Citation">
                      <i className="fas fa-quote-right"></i>
                    </button>
                  </div>
                </div>
                <div
                  id="richTextEditor"
                  className="editor-content"
                  contentEditable
                  ref={richTextEditorRef}
                  onInput={handleDescriptionChange}
                  dangerouslySetInnerHTML={{ __html: formData.description }}
                />
              </div>
              {errors.description && <div className="error-message">{errors.description}</div>}
            </div>
          </div>

          {/* Skills and Tags Section */}
          <div className="form-section">
            <h2 className="section-title"><i className="fas fa-tools"></i> Compétences et tags</h2>

            <div className="form-group">
              <label htmlFor="id_skills">Compétences requises</label>
              <select
                id="id_skills"
                name="skills"
                multiple
                className="skills-select"
                value={formData.skills}
                onChange={handleInputChange}
              >
                {skills.map((skill) => (
                  <option key={skill.id} value={skill.id}>{skill.nom}</option>
                ))}
              </select>
              {errors.skills && <div className="error-message">{errors.skills}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="id_specialties">Spécialités</label>
              <select
                id="id_specialties"
                name="specialties"
                multiple
                className="skills-select"
                value={formData.specialties}
                onChange={handleInputChange}
              >
                {specialties.map((specialty) => (
                  <option key={specialty.id} value={specialty.id}>
                    {specialty.nom} ({specialty.domaine.nom})
                  </option>
                ))}
              </select>
              {errors.specialties && <div className="error-message">{errors.specialties}</div>}
            </div>
          </div>

          {/* Additional Information Section */}
          <div className="form-section">
            <h2 className="section-title"><i className="fas fa-info-circle"></i> Informations supplémentaires</h2>

            <div className="form-group">
              <label htmlFor="id_salary_range">Fourchette salariale</label>
              <input
                type="text"
                id="id_salary_range"
                name="salary_range"
                placeholder="Ex: 50,000 - 70,000 DZD"
                value={formData.salary_range}
                onChange={handleInputChange}
              />
              {errors.salary_range && <div className="error-message">{errors.salary_range}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="id_benefits">Avantages</label>
              <textarea
                id="id_benefits"
                name="benefits"
                placeholder="Listez les avantages offerts (séparés par des virgules)"
                value={formData.benefits}
                onChange={handleInputChange}
              />
              {errors.benefits && <div className="error-message">{errors.benefits}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="id_application_instructions">Instructions de candidature</label>
              <textarea
                id="id_application_instructions"
                name="application_instructions"
                placeholder="Instructions spécifiques pour les candidats"
                value={formData.application_instructions}
                onChange={handleInputChange}
              />
              {errors.application_instructions && <div className="error-message">{errors.application_instructions}</div>}
            </div>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button type="button" className="btn btn-cancel" onClick={() => window.location.href = '/job_listings'}>
              <i className="fas fa-times"></i> Annuler
            </button>
            <button type="submit" className="btn btn-publish">
              <i className="fas fa-paper-plane"></i> Publier l'annonce
            </button>
            <button type="submit" name="save_draft" value="true" className="btn btn-save-draft">
              <i className="fas fa-save"></i> Enregistrer comme brouillon
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default CreeAnnonce;
